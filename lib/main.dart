import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

import 'auth_service.dart';
import 'image_search.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
      options: const FirebaseOptions(
          apiKey: "AIzaSyCxOxdYvpNAQq7S5p3PPCRxDm37t1-X3PI",
          authDomain: "smai-407ba.firebaseapp.com",
          projectId: "smai-407ba",
          storageBucket: "smai-407ba.appspot.com",
          messagingSenderId: "772935278270",
          appId: "1:772935278270:web:aa0a425175d32f8a9b48ef",
          measurementId: "G-T9M7GQ1S4Q",),);
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final AuthService _authService = AuthService();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: const Color(0xFF2D4356),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _emailController,
              decoration: const InputDecoration(hintText: 'Email'),
            ),
            TextField(
              controller: _passwordController,
              decoration: const InputDecoration(hintText: 'Password'),
              obscureText: true,
            ),
            ElevatedButton(
              onPressed: () {
                _authService.signIn(
                    _emailController.text, _passwordController.text, context);
              },
              child: const Text('Login'),
            ),
            ElevatedButton(
              onPressed: () {
                _authService.signUp(
                    _emailController.text, _passwordController.text, context);
              },
              child: const Text('Register'),
            ),
            // Adding the "Try it" button
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).push(MaterialPageRoute(builder: (context) => const ImageSearch()));
              },
              child: const Text('Try it'),
            ),
          ],
        ),
      ),
    );
  }
}