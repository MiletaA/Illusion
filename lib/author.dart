// ignore: file_names
class Author {
  final String id;
  final String username;

  Author(this.id, this.username);

  Author.fromJson(Map<String, dynamic> json)
      : id = json['id'] ?? "",
        username = json['username'] ?? "";
}