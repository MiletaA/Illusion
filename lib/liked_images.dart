import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'message.dart';
import 'custom_widget.dart';

class LikedImagesPage extends StatefulWidget {
  final List<Message> likedMessages;
  final ValueNotifier<int> likedImagesCounter;

  const LikedImagesPage({Key? key, required this.likedMessages, required this.likedImagesCounter}) : super(key: key);

  @override
  _LikedImagesPageState createState() => _LikedImagesPageState();
}

class _LikedImagesPageState extends State<LikedImagesPage> {
  @override
  Widget build(BuildContext context) {
    int crossAxisCount = MediaQuery.of(context).size.width < 600 ? 2 : 4; // responsive grid layout

    return Scaffold(
      appBar: AppBar(
        title: ValueListenableBuilder<int>(
          valueListenable: widget.likedImagesCounter,
          builder: (context, count, child) {
            return Text('Liked Images: $count');
          },
        ),
        backgroundColor: const Color(0xFF2D4356),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: GridView.builder(
          itemCount: widget.likedMessages.length,
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: crossAxisCount,
            crossAxisSpacing: 10,
            mainAxisSpacing: 10,
            childAspectRatio: 1, // to handle images of varying sizes
          ),
          itemBuilder: (context, index) {
            return GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ImageView(likedMessages: widget.likedMessages, currentIndex: index, deleteImage: deleteImage)),
                );
              },
              child: Stack(
                alignment: AlignmentDirectional.topEnd,
                children: [
                  AspectRatio(
                    aspectRatio: 1, // to maintain aspect ratio of images
                    child: Hero(
                      tag: widget.likedMessages[index].attachments[0].url,
                      child: FetchedImageWidget(imageUrl: widget.likedMessages[index].attachments[0].url),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: IconButton(
                      icon: const Icon(Icons.close, color: Colors.white,),
                      onPressed: () {
                        deleteImage(index);
                      },
                    ),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }

  void deleteImage(int index) {
    setState(() {
      widget.likedMessages.removeAt(index);
      widget.likedImagesCounter.value--; // Decrement the counter
    });
  }
}


// ignore: must_be_immutable
class ImageView extends StatefulWidget {
  final List<Message> likedMessages;
  int currentIndex;
  final Function deleteImage;

  ImageView({super.key, required this.likedMessages, required this.currentIndex, required this.deleteImage});

  @override
  _ImageViewState createState() => _ImageViewState();
}

class _ImageViewState extends State<ImageView> {
  late PageController _pageController;
  final FocusNode _focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    _pageController = PageController(initialPage: widget.currentIndex);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.delete, color: Colors.white),
            onPressed: () {
              widget.deleteImage(widget.currentIndex);
              Navigator.of(context).pop();
            },
          ),
        ],
      ),
      body: RawKeyboardListener(
        focusNode: _focusNode,
        onKey: (RawKeyEvent event) {
          if(event is RawKeyDownEvent) {
            if(event.logicalKey == LogicalKeyboardKey.arrowRight) {
              _pageController.nextPage(
                duration: const Duration(milliseconds: 300),
                curve: Curves.easeIn,
              );
            }
            if(event.logicalKey == LogicalKeyboardKey.arrowLeft) {
              _pageController.previousPage(
                duration: const Duration(milliseconds: 300),
                curve: Curves.easeIn,
              );
            }
          }
        },
        child: Stack(
          children: [
            PageView.builder(
              controller: _pageController,
              itemCount: widget.likedMessages.length,
              onPageChanged: (int index) {
                setState(() {
                  widget.currentIndex = index;
                });
              },
              itemBuilder: (context, index) {
                return Center(
                  child: Hero(
                    tag: widget.likedMessages[index].attachments[0].url,
                    child: FetchedImageWidget(imageUrl: widget.likedMessages[index].attachments[0].url),
                  ),
                );
              },
            ),
            Positioned(
              left: 10,
              bottom: 0,
              top: 0,
              child: IconButton(
                icon: const Icon(Icons.arrow_back_ios, color: Colors.white,),
                onPressed: () {
                  _pageController.previousPage(
                    duration: const Duration(milliseconds: 300),
                    curve: Curves.easeIn,
                  );
                },
              ),
            ),
            Positioned(
              right: 10,
              bottom: 0,
              top: 0,
              child: IconButton(
                icon: const Icon(Icons.arrow_forward_ios, color: Colors.white,),
                onPressed: () {
                  _pageController.nextPage(
                    duration: const Duration(milliseconds: 300),
                    curve: Curves.easeIn,
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
