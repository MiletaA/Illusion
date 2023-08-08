
  import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

class FetchedImageWidget extends StatelessWidget {
    final String imageUrl;

    const FetchedImageWidget ({super.key, required this.imageUrl});

    @override
    Widget build(BuildContext context) {
      return FutureBuilder(
        future: _cacheImage(context, imageUrl),
        builder: (context, snapshot) {
          switch (snapshot.connectionState) {
            case ConnectionState.none:
            case ConnectionState.waiting:
              return const CircularProgressIndicator();
            case ConnectionState.done:
              return _createImage();
            default:
              if (snapshot.hasError) {
                return Text('Error: ${snapshot.error}');
              } else {
                return const CircularProgressIndicator();
              }
          }
        },
      );
    }

    Future<void> _cacheImage(BuildContext context, String imageUrl) async {
      await precacheImage(CachedNetworkImageProvider(imageUrl), context);
    }

    Widget _createImage() {
      return CachedNetworkImage(
        imageUrl: imageUrl,
        placeholder: (context, url) => const CircularProgressIndicator(),
        errorWidget: (context, url, error) => const Icon(Icons.error),
      );
    }
  }
