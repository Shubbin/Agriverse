import 'package:flutter_test/flutter_test.dart';
import 'package:mobile/main.dart';

void main() {
  testWidgets('AgriVerseApp onboarding smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const AgriVerseApp());

    // Verify that onboarding screen with "Choose Your Journey" is displayed.
    expect(find.text('Choose Your Journey'), findsOneWidget);
    expect(find.text('Beginner Farmer Track'), findsOneWidget);
    expect(find.text('Established Farmer Track'), findsOneWidget);
  });
}
