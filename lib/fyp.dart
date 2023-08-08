import 'package:flutter/material.dart';

import 'custom_widget.dart';
import 'image_search.dart';
import 'message.dart';

class FYPPage extends StatefulWidget {
  final ImageSearch imageSearch;

  const FYPPage({Key? key, required this.imageSearch}) : super(key: key);

  @override
  _FYPPageState createState() => _FYPPageState();
}

class _FYPPageState extends State<FYPPage> {
  late List<Message> likedMessages;

  @override
  void initState() {
    super.initState();
    // likedMessages = widget.imageSearch.likedMessages;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('For You Page'),
        backgroundColor: Colors.teal,
      ),
      body: Column(
        children: [
          Expanded(
            child: MatchedMessages(
              matchedMessages: matchMessages(likedMessages),
            ),
          ),
        ],
      ),
    );
  }

  List<Message> matchMessages(List<Message> allMessages) {
    List<Message> matchedMessages = [];
    if (likedMessages.isNotEmpty) {
      for (Message message in allMessages) {
        for (Message likedMessage in likedMessages) {
          if (message.content.contains(likedMessage.content)) {
            matchedMessages.add(message);
            break;
          }
        }
      }
    }
    return matchedMessages;
  }
}

class MatchedMessages extends StatelessWidget {
  final List<Message> matchedMessages;

  const MatchedMessages({Key? key, required this.matchedMessages})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (matchedMessages.isEmpty) {
      return const Center(
        child: Text('No liked images'),
      );
    }
    return ListView.builder(
      itemCount: matchedMessages.length,
      itemBuilder: (context, index) {
        return ListTile(
          leading: FetchedImageWidget(imageUrl: matchedMessages[index].attachments[0].url),
          title: Text(matchedMessages[index].content),
        );
      },
    );
  }
}
