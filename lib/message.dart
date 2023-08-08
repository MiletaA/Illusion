import 'author.dart';
import 'attachment.dart';
import 'message_reference.dart';
class Message {
  final String id;
  final String content;
  final List<Attachment> attachments;
  final Author author;
  final MessageReference messageReference;

  Message(
      {required this.id,
        required this.content,
        required this.attachments,
        required this.author,
        required this.messageReference});

  factory Message.fromJson(Map<String, dynamic> json) {
    if (json['id'] == null ||
        json['content'] == null ||
        json['attachments'] == null ||
        json['author'] == null) {
      throw const FormatException('Missing a required field in Message');
    }
    return Message(
      id: json['id'],
      content: json['content'],
      attachments: (json['attachments'] as List)
          .map((i) => Attachment.fromJson(i))
          .toList(),
      author: Author.fromJson(json['author']),
      messageReference: json['message_reference'] != null
          ? MessageReference.fromJson(json['message_reference'])
          : MessageReference(""),
    );
  }
}




