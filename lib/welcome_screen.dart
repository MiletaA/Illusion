import 'package:flutter/material.dart';
import 'rounded_button.dart';

class WelcomeScreen extends StatefulWidget {
  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  Color bg = const Color(0xFF08576a);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: bg,
        body: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 2.0),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                OutlinedButton(
                  style: OutlinedButton.styleFrom(
                    fixedSize: const Size(200, 50),
                    shadowColor: Colors.black,
                    textStyle: const TextStyle(
                        fontWeight: FontWeight.bold, fontSize: 18),
                    foregroundColor: Colors.white,
                    side: const BorderSide(width: 2.0, color: Colors.white),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(32.0),
                    ),
                  ),
                  child: const Text('Log In'),
                  onPressed: () {
                    Navigator.pushNamed(context, 'login_screen');
                  },
                ),
                const SizedBox(height: 20),
                OutlinedButton(
                    style: OutlinedButton.styleFrom(
                      fixedSize: const Size(200, 50),
                      textStyle: const TextStyle(
                          fontWeight: FontWeight.bold, fontSize: 18),
                      foregroundColor: Colors.white,
                      side: const BorderSide(width: 2.0, color: Colors.white),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(32.0),
                      ),
                    ),
                    child: const Text('Register'),
                    onPressed: () {
                      Navigator.pushNamed(context, 'registration_screen');
                    }),
                const SizedBox(height: 20),
                OutlinedButton(
                    style: OutlinedButton.styleFrom(
                      fixedSize: const Size(200, 50),
                      textStyle: const TextStyle(
                          fontWeight: FontWeight.bold, fontSize: 18),
                      foregroundColor: Colors.white,
                      side: const BorderSide(width: 2.0, color: Colors.white),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(32.0),
                      ),
                    ),
                    child: const Text('Try it'),
                    onPressed: () {
                      Navigator.pushNamed(context, 'home_screen');
                    }),
              ]),
        ));
  }
}
