import 'package:flutter/material.dart';
import 'rounded_button.dart';

class WelcomeScreen extends StatefulWidget {
  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: const Color.fromARGB(255, 80, 72, 72),
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 2.0),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                ElevatedButton(
                  child: const Text('Log In'),
                  onPressed: () {
                    Navigator.pushNamed(context, 'login_screen');
                  },
                ),
                ElevatedButton(
                    child: const Text('Register'),
                    onPressed: () {
                      Navigator.pushNamed(context, 'registration_screen');
                    }),
                ElevatedButton(
                    child: const Text('Try it'),
                    onPressed: () {
                      Navigator.pushNamed(context, 'home_screen');
                    }),
              ]),
        ));
  }
}
