class MessageReference {
  final String messageId;

  MessageReference(this.messageId);

  MessageReference.fromJson(Map<String, dynamic> json)
      : messageId = json['message_id'] ?? "";
}
