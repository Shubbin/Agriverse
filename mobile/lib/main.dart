import 'package:flutter/material.dart';

void main() {
  runApp(const AgriVerseApp());
}

class AgriVerseApp extends StatelessWidget {
  const AgriVerseApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AgriVerse',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF006C45),
          primary: const Color(0xFF006C45),
          secondary: const Color(0xFF3B6756),
          tertiary: const Color(0xFF7D5800),
          surface: const Color(0xFFF8FAF8),
        ),
        fontFamily: 'Inter',
      ),
      home: const MainNavigationScreen(),
    );
  }
}

class MainNavigationScreen extends StatefulWidget {
  const MainNavigationScreen({super.key});

  @override
  State<MainNavigationScreen> createState() => _MainNavigationScreenState();
}

class _MainNavigationScreenState extends State<MainNavigationScreen> {
  int _currentIndex = 0;
  String _currentPath = 'Not Selected';
  bool _isOnboarded = false;

  void _setOnboardingPath(String path) {
    setState(() {
      _currentPath = path;
      _isOnboarded = true;
      _currentIndex = 0; // Go to Home (Dashboard)
    });
  }

  @override
  Widget build(BuildContext context) {
    if (!_isOnboarded) {
      return OnboardingScreen(onPathSelected: _setOnboardingPath);
    }

    final List<Widget> screens = [
      DashboardScreen(currentPath: _currentPath),
      const LearningScreen(),
      const MarketplaceScreen(),
      const WalletScreen(),
    ];

    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: screens,
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentIndex,
        onDestinationSelected: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
        destinations: const [
          NavigationDestination(
            icon: Icon(Icons.dashboard_outlined),
            selectedIcon: Icon(Icons.dashboard, color: Color(0xFF006C45)),
            label: 'Home',
          ),
          NavigationDestination(
            icon: Icon(Icons.school_outlined),
            selectedIcon: Icon(Icons.school, color: Color(0xFF006C45)),
            label: 'Learning',
          ),
          NavigationDestination(
            icon: Icon(Icons.storefront_outlined),
            selectedIcon: Icon(Icons.storefront, color: Color(0xFF006C45)),
            label: 'Market',
          ),
          NavigationDestination(
            icon: Icon(Icons.account_balance_wallet_outlined),
            selectedIcon: Icon(Icons.account_balance_wallet, color: Color(0xFF006C45)),
            label: 'Wallet',
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const GeminiChatScreen()),
          );
        },
        backgroundColor: const Color(0xFF2F80ED),
        child: const Icon(Icons.auto_awesome, color: Colors.white),
      ),
    );
  }
}

// Onboarding Path Selection Screen
class OnboardingScreen extends StatelessWidget {
  final Function(String) onPathSelected;

  const OnboardingScreen({super.key, required this.onPathSelected});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAF8),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const SizedBox(height: 40),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.agriculture, size: 36, color: Color(0xFF006C45)),
                  const SizedBox(width: 8),
                  const Text(
                    'AgriVerse',
                    style: TextStyle(
                      fontSize: 28,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFF006C45),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              const Text(
                'Choose Your Journey',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF171D19),
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                'Select a personalized agricultural pipeline track matching your level.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 14,
                  color: Color(0xFF6D7A71),
                ),
              ),
              const SizedBox(height: 48),
              
              // Beginner Track Card
              Expanded(
                child: Card(
                  elevation: 2,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                    side: const BorderSide(color: Color(0xFFE6EAE8)),
                  ),
                  color: Colors.white,
                  child: InkWell(
                    onTap: () => onPathSelected('Beginner'),
                    borderRadius: BorderRadius.circular(16),
                    child: Padding(
                      padding: const EdgeInsets.all(20.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            padding: const EdgeInsets.all(12),
                            decoration: const BoxDecoration(
                              color: Color(0x1A006C45),
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(Icons.school, size: 36, color: Color(0xFF006C45)),
                          ),
                          const SizedBox(height: 16),
                          const Text(
                            'Beginner Farmer Track',
                            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF171D19)),
                          ),
                          const SizedBox(height: 8),
                          const Text(
                            'Learn modern ag basics, earn completion badges, and unlock initial OPay startup loans.',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 13, color: Color(0xFF6D7A71)),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              
              const SizedBox(height: 24),
              
              // Established Track Card
              Expanded(
                child: Card(
                  elevation: 2,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(16),
                    side: const BorderSide(color: Color(0xFFE6EAE8)),
                  ),
                  color: Colors.white,
                  child: InkWell(
                    onTap: () => onPathSelected('Established'),
                    borderRadius: BorderRadius.circular(16),
                    child: Padding(
                      padding: const EdgeInsets.all(20.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            padding: const EdgeInsets.all(12),
                            decoration: const BoxDecoration(
                              color: Color(0x1A7D5800),
                              shape: BoxShape.circle,
                            ),
                            child: const Icon(Icons.trending_up, size: 36, color: Color(0xFF7D5800)),
                          ),
                          const SizedBox(height: 16),
                          const Text(
                            'Established Farmer Track',
                            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF171D19)),
                          ),
                          const SizedBox(height: 8),
                          const Text(
                            'Access wholesale crop markets, optimize yields, and build high-tier expansion credit scores.',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 13, color: Color(0xFF6D7A71)),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}

// Dashboard Screen
class DashboardScreen extends StatelessWidget {
  final String currentPath;

  const DashboardScreen({super.key, required this.currentPath});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF8FAF8),
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        scrolledUnderElevation: 0,
        title: Row(
          children: [
            Stack(
              children: [
                const CircleAvatar(
                  radius: 20,
                  backgroundImage: NetworkImage(
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBF4Wt3LyC-JYlHCElzPGcwQxs8N4h88i4Bsm1nxRysL6KgYQBlWXRRPTL-36OHhmsufyZHWFnGfC1ZyEQvAk0PHQiYOwV_TbBkdNBqXxCrhK7Q8y16YRaL0uedlliWZzDL5wSdT2pZAerKjrZXzK4YTOhNZvAsH6zLV2922xX6Jd0Hlt4QxpC67-JZHodmIcFulHYDFj2IQ8CKxB-y46ilega2q9gmUS--Hz8XUAlS4vU497XvFua3hGZtomnTF6z-UwNImV41qtw',
                  ),
                ),
                Positioned(
                  bottom: -2,
                  right: -2,
                  child: Container(
                    padding: const EdgeInsets.all(2),
                    decoration: const BoxDecoration(
                      color: Color(0xFF7D5800),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(Icons.verified, size: 10, color: Colors.white),
                  ),
                )
              ],
            ),
            const SizedBox(width: 12),
            const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Hello, Samuel',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF171D19)),
                ),
                Text(
                  'Verified Kaduna Farmer',
                  style: TextStyle(fontSize: 11, color: Color(0xFF6D7A71)),
                )
              ],
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.notifications_none, color: Color(0xFF6D7A71)),
            onPressed: () {},
          ),
          const SizedBox(width: 8),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Welcome Banner
              Card(
                elevation: 0,
                color: const Color(0x1A006C45),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                  side: const BorderSide(color: Color(0x1A006C45)),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Row(
                    children: [
                      const Icon(Icons.local_florist, color: Color(0xFF006C45), size: 28),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              '$currentPath Track Active',
                              style: const TextStyle(fontWeight: FontWeight.bold, color: Color(0xFF006C45), fontSize: 14),
                            ),
                            const Text(
                              'Your 3MTT learning counts toward OPay loan score.',
                              style: TextStyle(color: Color(0xFF3B6756), fontSize: 12),
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),

              // Stats Cards
              Row(
                children: [
                  Expanded(
                    child: _buildBentoCard(
                      icon: Icons.school,
                      iconColor: const Color(0xFF006C45),
                      title: 'Learning',
                      value: '80%',
                      subtitle: 'Progress',
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: _buildBentoCard(
                      icon: Icons.stars,
                      iconColor: const Color(0xFF7D5800),
                      title: 'Credit Score',
                      value: '720',
                      subtitle: 'Gold Status',
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),

              // Weather Advisory
              Card(
                color: Colors.white,
                elevation: 1,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                  side: const BorderSide(color: Color(0xFFE6EAE8)),
                ),
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                              color: Colors.amber.shade50,
                              borderRadius: BorderRadius.circular(20),
                              border: Border.all(color: Colors.amber.shade200, width: 1),
                            ),
                            child: Text(
                              'Weather Advisory',
                              style: TextStyle(color: Colors.amber.shade800, fontSize: 11, fontWeight: FontWeight.bold),
                            ),
                          ),
                          const Icon(Icons.wb_cloudy_outlined, color: Color(0xFF6D7A71)),
                        ],
                      ),
                      const SizedBox(height: 12),
                      const Text(
                        'Heavy Rainfall Expected',
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF171D19)),
                      ),
                      const SizedBox(height: 6),
                      const Text(
                        'Kaduna expects 25mm of rain in the next 48 hours. Clear silage maize drainage channels now.',
                        style: TextStyle(fontSize: 13, color: Color(0xFF6D7A71), height: 1.4),
                      ),
                      const SizedBox(height: 16),
                      const Divider(color: Color(0xFFE6EAE8)),
                      const Row(
                        children: [
                          Icon(Icons.thermostat, size: 16, color: Color(0xFF6D7A71)),
                          SizedBox(width: 4),
                          Text('24°C', style: TextStyle(fontSize: 12, color: Color(0xFF171D19))),
                          SizedBox(width: 16),
                          Icon(Icons.water_drop, size: 16, color: Color(0xFF6D7A71)),
                          SizedBox(width: 4),
                          Text('82% Humidity', style: TextStyle(fontSize: 12, color: Color(0xFF171D19))),
                        ],
                      )
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 16),

              // OPay Loan Section
              Card(
                color: const Color(0xFF7D5800),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                child: Padding(
                  padding: const EdgeInsets.all(20.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const Text(
                        'PRE-APPROVED LOAN',
                        style: TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.bold, letterSpacing: 1.2),
                      ),
                      const SizedBox(height: 4),
                      const Text(
                        '₦250,000 Expansion Credit',
                        style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'Based on your consistent 3MTT badge progression. Instant pay-out to OPay.',
                        style: TextStyle(color: Colors.white70, fontSize: 12, height: 1.3),
                      ),
                      const SizedBox(height: 16),
                      ElevatedButton(
                        onPressed: () {},
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.white,
                          foregroundColor: const Color(0xFF7D5800),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                        child: const Text('Apply with OPay Wallet', style: TextStyle(fontWeight: FontWeight.bold)),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 80),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildBentoCard({
    required IconData icon,
    required Color iconColor,
    required String title,
    required String value,
    required String subtitle,
  }) {
    return Card(
      color: Colors.white,
      elevation: 1,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: const BorderSide(color: Color(0xFFE6EAE8)),
      ),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(title, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF6D7A71))),
                Icon(icon, color: iconColor, size: 20),
              ],
            ),
            const SizedBox(height: 12),
            Text(value, style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: iconColor)),
            Text(subtitle, style: const TextStyle(fontSize: 11, color: Color(0xFF6D7A71))),
          ],
        ),
      ),
    );
  }
}

// Placeholders for other views
class LearningScreen extends StatelessWidget {
  const LearningScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(child: Text('3MTT Learning Hub Modules')),
    );
  }
}

class MarketplaceScreen extends StatelessWidget {
  const MarketplaceScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(child: Text('AgriVerse Produce & Seed Marketplace')),
    );
  }
}

class WalletScreen extends StatelessWidget {
  const WalletScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(child: Text('OPay Wallet & Escrow Ledger')),
    );
  }
}

// Gemini AI Chat Assistant Screen
class GeminiChatScreen extends StatefulWidget {
  const GeminiChatScreen({super.key});

  @override
  State<GeminiChatScreen> createState() => _GeminiChatScreenState();
}

class _GeminiChatScreenState extends State<GeminiChatScreen> {
  final List<Map<String, String>> _messages = [
    {
      'sender': 'gemini',
      'text': 'Hello Samuel! I am your Gemini AI Farm Guard. How can I help you in Kaduna today?'
    }
  ];
  final TextEditingController _controller = TextEditingController();

  void _sendMessage() {
    final text = _controller.text.trim();
    if (text.isEmpty) return;

    setState(() {
      _messages.add({'sender': 'user', 'text': text});
    });
    _controller.clear();

    Future.delayed(const Duration(milliseconds: 1000), () {
      String response = "I am processing your query. Please ask me about weather, maize, or OPay loans.";
      final lowercase = text.toLowerCase();
      if (lowercase.contains('maize') || lowercase.contains('disease')) {
        response = "Samuel, check maize plot drainage in Kaduna due to heavy rainfall. Neem oil spray cures leaf blight spots.";
      } else if (lowercase.contains('weather') || lowercase.contains('rain')) {
        response = "Rain Alert: expect 25mm precipation in Kaduna. Relative humidity will hit 82%.";
      } else if (lowercase.contains('loan') || lowercase.contains('credit')) {
        response = "Your pre-approved OPay expansion loan of ₦250,000 is active. Tap the Gold loan card on your dashboard home to apply.";
      }

      setState(() {
        _messages.add({'sender': 'gemini', 'text': response});
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: const Color(0xFF2F80ED),
        foregroundColor: Colors.white,
        title: const Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Gemini AI Farm Guard', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
            Text('Online - Kaduna Extension Officer', style: TextStyle(fontSize: 10, color: Colors.white70)),
          ],
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              padding: const EdgeInsets.all(16),
              itemCount: _messages.length,
              itemBuilder: (context, index) {
                final msg = _messages[index];
                final isUser = msg['sender'] == 'user';
                return Align(
                  alignment: isUser ? Alignment.centerRight : Alignment.centerLeft,
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 12),
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                    decoration: BoxDecoration(
                      color: isUser ? const Color(0xFF2F80ED) : Colors.grey.shade200,
                      borderRadius: BorderRadius.only(
                        topLeft: const Radius.circular(12),
                        topRight: const Radius.circular(12),
                        bottomLeft: isUser ? const Radius.circular(12) : Radius.zero,
                        bottomRight: isUser ? Radius.zero : const Radius.circular(12),
                      ),
                    ),
                    child: Text(
                      msg['text']!,
                      style: TextStyle(color: isUser ? Colors.white : Colors.black87, fontSize: 14),
                    ),
                  ),
                );
              },
            ),
          ),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: const BoxDecoration(
              color: Colors.white,
              border: Border(top: BorderSide(color: Color(0xFFE6EAE8))),
            ),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    decoration: InputDecoration(
                      hintText: 'Ask Gemini in English or local dialects...',
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(24)),
                      contentPadding: const EdgeInsets.symmetric(horizontal: 16),
                    ),
                    onSubmitted: (_) => _sendMessage(),
                  ),
                ),
                const SizedBox(width: 8),
                IconButton(
                  icon: const Icon(Icons.send, color: Color(0xFF2F80ED)),
                  onPressed: _sendMessage,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
