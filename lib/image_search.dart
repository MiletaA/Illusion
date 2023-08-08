import 'dart:convert';
import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'custom_widget.dart';
import 'liked_images.dart';
import 'message.dart';

class ImageSearch extends StatefulWidget {
  const ImageSearch({Key? key, this.onMessagesLoaded}) : super(key: key);

  final void Function(List<Message>)? onMessagesLoaded;

  // List<Message> get likedMessages => null;

 // const ImageSearch({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _ImageSearchState createState() => _ImageSearchState();
}

class _ImageSearchState extends State<ImageSearch> {
  List<Message> messages = [];
  List<Message> likedMessages = [];
  final ValueNotifier<int> likedImagesCounter = ValueNotifier<int>(0);

  List<Message> visibleMessages = [];
  final searchController = TextEditingController();
  final rand = Random();
  final FocusNode focusNode = FocusNode();

  bool _isSearch = false;
  bool searchPerformed = false;

  @override
  void initState() {
    super.initState();
    loadJsonData();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _showTermsAndConditionsDialog(context); // Show the dialog when the widget is initialized
    });

    // WidgetsBinding.instance!.addPostFrameCallback((_) { The '!' will have no effect because the receiver can't be null.
    //   _showTermsAndConditionsDialog(); // Show the dialog when the widget is initialized
    // });

  }

  @override
  void dispose() {
    searchController.dispose();
    focusNode.dispose();
    super.dispose();
  }
  void _showTermsAndConditionsDialog(BuildContext context) {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Terms and Conditions'),
          content: SingleChildScrollView(
            child: ListBody(
              children: const [
                Text(
                  'WARNING: The content displayed may be disturbing or scary, politically incorrect, and may not be suitable for all audiences. Viewer discretion is advised.',
                  style: TextStyle(color: Colors.red),
                ),
                SizedBox(height: 20),
                Text(
                  'How to use the app:',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                Text(
                  'On a computer:\n- Use the arrow keys (left and right) to navigate through the images.\n- Press "R" to load a random image.\n- Swipe right to like an image, and left to load a random image.',
                ),
                Text(
                  'On a phone:\n- Swipe right to like an image, and left to load a random image.\n- Tap on the buttons to perform actions:\n  • Search: to search for images.\n  • Replay: to load a random image.\n  • Favorite: to view liked images.',
                ),
                SizedBox(height: 10),
                Text(
                  'Tip: Click the reload button after agreeing to these terms and conditions to refresh the content. Use that button frequently if image takes too long to load.',
                  style: TextStyle(color: Colors.blue, fontStyle: FontStyle.italic),
                ),
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(); // Close the dialog
              },
              style: TextButton.styleFrom(
                side: const BorderSide(color: Color(0xFF2D4356)),
              ),
              child: const Text('I Agree'),
            ),
          ],
        );
      },
    );
  }


  void searchMessages() {
    final query = searchController.text.toLowerCase();
    if (query.isNotEmpty) {
      visibleMessages = messages
          .where((message) => message.content.toLowerCase().contains(query))
          .toList();
      searchPerformed = true;
    } else {
      visibleMessages = [...messages];
    }
    focusNode.requestFocus();
    setState(() {});
  }

  void resetSearch() {
    if (!searchPerformed) {
      searchController.clear();
      _isSearch = false;
      searchPerformed = false;
      setState(() {});
    } else {
      searchController.clear();
      _isSearch = false;
      searchPerformed = false;
      visibleMessages = List.from(messages)
        ..shuffle();
      setState(() {});
    }
  }
  void likeCurrentImage() async {
    if (visibleMessages.isNotEmpty) {
      var currentMessage = visibleMessages[0];
      setState(() {
        visibleMessages.removeAt(0);
        likedMessages.add(currentMessage);
      });
      likedImagesCounter.value++; // Increment the counter
      loadRandomImage();
    }
  }


  void loadRandomImage() {
    if (visibleMessages.isNotEmpty) {
      var randomIndex = rand.nextInt(visibleMessages.length);
      var randomMessage = visibleMessages[randomIndex];
      visibleMessages.removeAt(randomIndex);
      visibleMessages.insert(0, randomMessage);
    }
    setState(() {});
  }

  Future<void> loadJsonData() async {
    final fileNameString =
    await rootBundle.loadString('lib/assets/file_names.txt');
    final fileNames = LineSplitter.split(fileNameString);
    for (var fileName in fileNames) {
      final jsonString = await rootBundle.loadString('lib/assets/$fileName');
      final jsonResponse = json.decode(jsonString);
      final messagesJson = jsonResponse['messages'] as List;
      for (var message in messagesJson) {
        if (message != null) {
          try {
            final msg = Message.fromJson(message[0]);
            messages.add(msg);
          } catch (e) {
            if (kDebugMode) {
              print("Invalid message format: $e");
            }
          }
        }
      }
    }
    messages.shuffle();
    visibleMessages = [...messages];
    if (widget.onMessagesLoaded != null) {
      widget.onMessagesLoaded!(
          messages); // Call the function when messages are loaded
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        // Message at top
        if (visibleMessages.isNotEmpty)
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Text(visibleMessages[0].content),
          ),

        // Images
        Expanded(
          child: visibleMessages.isNotEmpty &&
              visibleMessages[0].attachments.isNotEmpty
              ? Focus(
            focusNode: focusNode,
            autofocus: true,
            onKey: (FocusNode node, RawKeyEvent event) {
              if (event is RawKeyDownEvent) {
                if (event.logicalKey == LogicalKeyboardKey.arrowRight) {
                  likeCurrentImage();
                  return KeyEventResult.handled;
                }
                else if (event.logicalKey == LogicalKeyboardKey.arrowLeft) {
                  loadRandomImage();
                  return KeyEventResult.handled;
                }
                else if (event.logicalKey == LogicalKeyboardKey.keyR) {
                  loadRandomImage();
                  return KeyEventResult.handled;
                }
              }
              return KeyEventResult.ignored;
            },
            child: Dismissible(
              key: Key(visibleMessages[0].id),
              onDismissed: (direction) {
                if (direction == DismissDirection.startToEnd) {
                  likeCurrentImage(); // Likes the image when swiped right
                } else if (direction == DismissDirection.endToStart) {
                  loadRandomImage(); // Loads random image when swiped left
                }
              },
              child: Center(
                child: FetchedImageWidget(
                    imageUrl: visibleMessages[0].attachments[0].url),
              ),
            ),
          )
              : const Center(child: CircularProgressIndicator()),
        ),

        // Buttons at bottom
        Padding(
          padding: const EdgeInsets.all(20.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                width:
                _isSearch ? MediaQuery
                    .of(context)
                    .size
                    .width * 0.4 : 50.0,
                height: 50.0,
                decoration: BoxDecoration(
                  color: _isSearch ? Colors.grey[200] : Colors.white,
                  borderRadius: BorderRadius.circular(25.0),
                ),
                child: _isSearch
                    ? TextField(
                  controller: searchController,
                  style: const TextStyle(color: Color(0xFF2D4356)),
                  onSubmitted: (value) {
                    searchMessages();
                  },
                  decoration: InputDecoration(
                    prefixIcon: IconButton(
                      icon: const Icon(Icons.search, color: Color(0xFF2D4356)),
                      onPressed: searchMessages,
                    ),
                    suffixIcon: IconButton(
                      icon: const Icon(Icons.close, color: Color(0xFF2D4356)),
                      onPressed: resetSearch,
                    ),
                    border: const OutlineInputBorder(
                        borderSide: BorderSide.none),
                    contentPadding:
                    const EdgeInsets.symmetric(horizontal: 10),
                  ),
                )
                    : IconButton(
                  icon: const Icon(Icons.search),
                  onPressed: () {
                    setState(() {
                      _isSearch = true;
                    });
                  },
                ),
              ),
              const SizedBox(width: 20),
              Container(
                width: 50.0,
                height: 50.0,
                decoration: BoxDecoration(
                  color: Colors.white,
                  border: Border.all(
                    color: Colors.white,
                    width: 2,
                  ),
                  borderRadius: BorderRadius.circular(100),
                ),
                child: IconButton(
                  icon: const Icon(Icons.replay, color: Color(0xFF2D4356)),
                  onPressed: loadRandomImage,
                ),
              ),
              const SizedBox(width: 20),
              Container(
                width: 50.0,
                height: 50.0,
                decoration: BoxDecoration(
                  color: Colors.white,
                  border: Border.all(
                    color: Colors.white,
                    width: 2,
                  ),
                  borderRadius: BorderRadius.circular(100),
                ),
                child: IconButton(
                  icon: const Icon(Icons.favorite, color: Color(0xFF2D4356)),
                  onPressed: () {
                    Future.delayed(const Duration(milliseconds: 100), () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) =>
                                LikedImagesPage(likedMessages: likedMessages, likedImagesCounter: likedImagesCounter,)
                        ),
                      );
                    });
                  },
                ),
              ),
              // const SizedBox(width: 20),
              // Container(
              //   width: 50.0,
              //   height: 50.0,
              //   decoration: BoxDecoration(
              //     color: Colors.white,
              //     border: Border.all(
              //       color: Colors.white,
              //       width: 2,
              //     ),
              //     borderRadius: BorderRadius.circular(100),
              //   ),
              //   child: IconButton(
              //     icon: const Icon(Icons.whatshot, color: Color(0xFF2D4356)),
              //     // use an appropriate icon
              //     onPressed: () {
              //       // Future.delayed(Duration(milliseconds: 100), () {
              //       //   Navigator.push(
              //       //     context,
              //       //     MaterialPageRoute(
              //       //         // builder: (context) => FYPPage(likedMessages: likedMessages)
              //       //     ),
              //       //   );
              //       // });
              //     },
              //   ),
              // ),

              Padding(
                padding: const EdgeInsets.only(left: 10.0),
                child: ValueListenableBuilder<int>(
                  valueListenable: likedImagesCounter,
                  builder: (context, value, child) {
                    return Text(
                        '$value',
                        style: const TextStyle(fontSize: 18.0)
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}