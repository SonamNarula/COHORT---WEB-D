// Enhanced JavaScript functionality
class GeeksForGeeksApp {
    constructor() {
        this.currentQuiz = null;
        this.cuteEmojis = ['🦄', '🌈', '⭐', '💫', '🎉', '🎊', '💝', '🌸', '🦋', '🌺', '🍭', '🎀', '✨'];
        this.quizData = {
            dataStructures: [
                {
                    question: "What is the time complexity of searching in a balanced BST?",
                    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                    correct: 1
                },
                {
                    question: "Which data structure uses LIFO principle?",
                    options: ["Queue", "Stack", "Array", "Linked List"],
                    correct: 1
                },
                {
                    question: "What is the space complexity of merge sort?",
                    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                    correct: 2
                }
            ],
            algorithms: [
                {
                    question: "Which sorting algorithm has the best average time complexity?",
                    options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
                    correct: 1
                },
                {
                    question: "What is the principle behind dynamic programming?",
                    options: ["Divide and Conquer", "Greedy Choice", "Optimal Substructure", "Backtracking"],
                    correct: 2
                },
                {
                    question: "BFS uses which data structure?",
                    options: ["Stack", "Queue", "Priority Queue", "Tree"],
                    correct: 1
                }
            ],
            webDev: [
                {
                    question: "Which is not a JavaScript framework?",
                    options: ["React", "Vue", "Angular", "Laravel"],
                    correct: 3
                },
                {
                    question: "What does CSS stand for?",
                    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
                    correct: 1
                },
                {
                    question: "Which HTML5 element is used for navigation?",
                    options: ["<nav>", "<navigation>", "<menu>", "<header>"],
                    correct: 0
                }
            ]
        };
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.searchSuggestions = [
            "Binary Search Algorithm",
            "Linked List Implementation",
            "Dynamic Programming",
            "React Hooks Tutorial",
            "System Design Interview",
            "Time Complexity Analysis",
            "Graph Traversal",
            "JavaScript Promises",
            "Database Normalization",
            "Machine Learning Basics"
        ];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeTheme();
        this.showLoadingScreen();
        this.initializeAnimations();
        this.setupWeatherWidget();
        this.showCookieBanner();
        this.initializeCounters();
        this.startCuteElements();
    }

    setupEventListeners() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        
        // Search functionality
        const searchBox = document.getElementById('searchBox');
        searchBox.addEventListener('input', (e) => this.handleSearch(e.target.value));
        searchBox.addEventListener('focus', () => this.showSearchSuggestions());
        searchBox.addEventListener('blur', () => setTimeout(() => this.hideSearchSuggestions(), 200));
        
        // Scroll to top
        document.getElementById('scrollTop').addEventListener('click', () => this.scrollToTop());
        
        // Window scroll events
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Navigation clicks
        document.querySelectorAll('.nav-item a').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // Modal close on outside click
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.closeModal(e.target.id);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    toggleTheme() {
        const body = document.body;
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light';
            this.saveToStorage('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark';
            this.saveToStorage('theme', 'light');
        }
        
        this.showNotification('Theme changed successfully! ✨', 'cute');
    }

    startCuteElements() {
        // Create floating emojis
        setInterval(() => {
            this.createFloatingEmoji();
        }, 3000);

        // Create random sparkles
        setInterval(() => {
            this.createSparkle();
        }, 1000);
    }

    createFloatingEmoji() {
        const cuteElements = document.getElementById('cuteElements');
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = this.cuteEmojis[Math.floor(Math.random() * this.cuteEmojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDelay = Math.random() * 2 + 's';
        emoji.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        cuteElements.appendChild(emoji);
        
        setTimeout(() => {
            if (emoji.parentNode) {
                emoji.parentNode.removeChild(emoji);
            }
        }, 15000);
    }

    createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }

    createHeartEffect(x, y) {
        const heart = document.createElement('div');
        heart.className = 'heart-pulse';
        heart.textContent = '💝';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 2000);
    }

    initializeTheme() {
        const savedTheme = this.getFromStorage('theme') || 'light';
        const body = document.body;
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        
        if (savedTheme === 'dark') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light';
        }
    }

    handleSearch(query) {
        const suggestions = document.getElementById('searchSuggestions');
        
        if (query.length > 0) {
            const filtered = this.searchSuggestions.filter(item => 
                item.toLowerCase().includes(query.toLowerCase())
            );
            
            suggestions.innerHTML = filtered.map(item => 
                `<div class="suggestion-item" onclick="app.selectSuggestion('${item}')">${item}</div>`
            ).join('');
            
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }
    }

    showSearchSuggestions() {
        const suggestions = document.getElementById('searchSuggestions');
        const searchBox = document.getElementById('searchBox');
        
        if (searchBox.value.length > 0) {
            suggestions.style.display = 'block';
        }
    }

    hideSearchSuggestions() {
        document.getElementById('searchSuggestions').style.display = 'none';
    }

    selectSuggestion(suggestion) {
        document.getElementById('searchBox').value = suggestion;
        this.hideSearchSuggestions();
        this.showNotification(`Searching for: ${suggestion} 🔍✨`, 'cute');
    }

    handleScroll() {
        const scrollTop = window.pageYOffset;
        const scrollButton = document.getElementById('scrollTop');
        
        // Show/hide scroll to top button
        if (scrollTop > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
        
        // Parallax effect
        const hero = document.querySelector('.hero');
        const rate = scrollTop * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
        
        // Header background opacity
        const header = document.querySelector('.header');
        const opacity = Math.min(1, scrollTop / 100);
        header.style.background = `linear-gradient(135deg, 
            rgba(47,141,70,${0.9 + opacity * 0.1}), 
            rgba(76,175,80,${0.9 + opacity * 0.1}))`;
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    handleNavigation(e) {
        e.preventDefault();
        const section = e.target.getAttribute('data-section');
        
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        e.target.parentElement.classList.add('active');
        
        this.showNotification(`Navigated to ${section.charAt(0).toUpperCase() + section.slice(1)} 🚀`, 'cute');
    }

    handleKeyboard(e) {
        // Press '/' to focus search
        if (e.key === '/' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            document.getElementById('searchBox').focus();
        }
        
        // Press 'Escape' to close modals
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    this.closeModal(modal.id);
                }
            });
        }
        
        // Press 'T' to toggle theme
        if (e.key === 't' || e.key === 'T') {
            if (!e.target.matches('input, textarea')) {
                this.toggleTheme();
            }
        }
    }

    showLoadingScreen() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loadingOverlay').classList.add('hidden');
                this.showNotification('Welcome to GeeksforGeeks! 🎉', 'success');
            }, 1500);
        });
    }

    initializeAnimations() {
        // Typing effect for hero text
        const heroText = document.getElementById('heroText');
        const texts = [
            "Learn coding, solve problems, and crack your dream job! 💝",
            "Master Data Structures and Algorithms with us! 🧠✨",
            "Join thousands of successful developers! 🌟👩‍💻",
            "Your coding journey starts here! 🚀💫",
            "Built with love by Sonam Narula! 💖👩‍💻"
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let currentText = texts[textIndex];
        let isDeleting = false;
        
        const typeWriter = () => {
            if (!isDeleting) {
                heroText.textContent = currentText.slice(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentText.length) {
                    setTimeout(() => isDeleting = true, 2000);
                }
            } else {
                heroText.textContent = currentText.slice(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    currentText = texts[textIndex];
                }
            }
            
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        };
        
        setTimeout(typeWriter, 2000);
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease forwards';
                }
            });
        }, observerOptions);
        
        // Observe cards
        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });
    }

    setupWeatherWidget() {
        // Simulated weather data (in real app, you'd fetch from an API)
        const weatherData = {
            temp: Math.floor(Math.random() * 15) + 20, // 20-35°C
            description: ['Sunny', 'Cloudy', 'Partly Cloudy', 'Clear'][Math.floor(Math.random() * 4)]
        };
        
        setTimeout(() => {
            document.getElementById('weatherTemp').textContent = `${weatherData.temp}°C`;
            document.getElementById('weatherDesc').textContent = weatherData.description;
            document.getElementById('weatherWidget').classList.add('show');
        }, 3000);
        
        // Hide weather widget after 10 seconds
        setTimeout(() => {
            document.getElementById('weatherWidget').classList.remove('show');
        }, 13000);
    }

    showCookieBanner() {
        const hasAcceptedCookies = this.getFromStorage('cookiesAccepted');
        
        if (!hasAcceptedCookies) {
            setTimeout(() => {
                document.getElementById('cookieBanner').classList.add('show');
            }, 2000);
        }
    }

    acceptCookies() {
        this.saveToStorage('cookiesAccepted', 'true');
        document.getElementById('cookieBanner').classList.remove('show');
        this.showNotification('Cookies accepted. Thank you!', 'success');
    }

    declineCookies() {
        document.getElementById('cookieBanner').classList.remove('show');
        this.showNotification('Cookies declined. Some features may be limited.', 'error');
    }

    initializeCounters() {
        const counters = document.querySelectorAll('.progress-number');
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (target > 1000) {
                        counter.textContent = Math.floor(current).toLocaleString() + '+';
                    } else {
                        counter.textContent = Math.floor(current) + (target === 95 ? '%' : '+');
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target > 1000) {
                        counter.textContent = target.toLocaleString() + '+';
                    } else {
                        counter.textContent = target + (target === 95 ? '%' : '+');
                    }
                }
            };
            
            updateCounter();
        };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    startQuiz(type) {
        this.currentQuiz = type;
        this.currentQuestionIndex = 0;
        this.score = 0;
        
        document.getElementById('quizSection').style.display = 'block';
        document.getElementById('quizScore').textContent = '0';
        document.getElementById('totalQuestions').textContent = this.quizData[type].length;
        
        this.loadQuestion();
        
        // Scroll to quiz section
        document.getElementById('quizSection').scrollIntoView({ behavior: 'smooth' });
    }

    loadQuestion() {
        const quiz = this.quizData[this.currentQuiz];
        const question = quiz[this.currentQuestionIndex];
        
        document.getElementById('quizQuestion').textContent = question.question;
        
        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.textContent = option;
            optionDiv.onclick = () => this.selectOption(index, optionDiv);
            optionsContainer.appendChild(optionDiv);
        });
        
        document.getElementById('nextBtn').style.display = 'none';
    }

    selectOption(selectedIndex, optionElement) {
        const quiz = this.quizData[this.currentQuiz];
        const question = quiz[this.currentQuestionIndex];
        
        // Remove previous selections
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Mark selected option
        optionElement.classList.add('selected');
        
        // Check if answer is correct
        if (selectedIndex === question.correct) {
            this.score++;
            this.showNotification('Correct! Well done! 🎉✨', 'cute');
            this.createHeartEffect(window.innerWidth/2, window.innerHeight/2);
        } else {
            this.showNotification('Wrong answer. Keep learning! 📚💪', 'error');
        }
        
        document.getElementById('quizScore').textContent = this.score;
        document.getElementById('nextBtn').style.display = 'block';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        const quiz = this.quizData[this.currentQuiz];
        
        if (this.currentQuestionIndex < quiz.length) {
            this.loadQuestion();
        } else {
            this.endQuiz();
        }
    }

    endQuiz() {
        const quiz = this.quizData[this.currentQuiz];
        const percentage = Math.round((this.score / quiz.length) * 100);
        
        document.getElementById('quizSection').innerHTML = `
            <div class="quiz-container">
                <h2>Quiz Completed!</h2>
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 3rem; color: var(--primary-green);">${percentage}%</div>
                    <p>You scored ${this.score} out of ${quiz.length} questions correctly!</p>
                    <div style="margin-top: 2rem;">
                        <button class="cta-button cta-primary" onclick="app.startQuiz('${this.currentQuiz}')">Retake Quiz</button>
                        <button class="cta-button cta-secondary" onclick="app.hideQuiz()">Close</button>
                    </div>
                </div>
            </div>
        `;
        
        let message = '';
        if (percentage >= 80) {
            message = 'Excellent work! You\'re ready for the next level! 🏆✨';
        } else if (percentage >= 60) {
            message = 'Good job! Keep practicing to improve! 👍💫';
        } else {
            message = 'Keep learning! Practice makes perfect! 📖💪';
        }
        
        this.showNotification(message, 'cute');
    }

    hideQuiz() {
        document.getElementById('quizSection').style.display = 'none';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    selectPath(path) {
        this.showNotification(`Selected ${path} learning path! Let's code! 💻✨`, 'cute');
        this.closeModal('learningModal');
        
        // Simulate loading curriculum
        setTimeout(() => {
            this.s