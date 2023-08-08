class Attachment {
  final String url;

  Attachment(this.url);

  Attachment.fromJson(Map<String, dynamic> json) : url = json['url'] ?? "";
}