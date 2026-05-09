## File Structure

collaborative-problem-solving-platform/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── images/
│
├── src/
│   │
│   ├── assets/
│   │   ├── icons/
│   │   ├── illustrations/
│   │   ├── avatars/
│   │   └── styles/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Card.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── StatsCard.jsx
│   │   │   ├── ActivityFeed.jsx
│   │   │   ├── RecommendationCard.jsx
│   │   │   └── NotificationPanel.jsx
│   │   │
│   │   ├── posts/
│   │   │   ├── ProblemCard.jsx
│   │   │   ├── ProblemForm.jsx
│   │   │   ├── TagList.jsx
│   │   │   ├── SolutionCard.jsx
│   │   │   └── FileUpload.jsx
│   │   │
│   │   ├── discussion/
│   │   │   ├── CommentSection.jsx
│   │   │   ├── CommentCard.jsx
│   │   │   ├── ReplyBox.jsx
│   │   │   └── UpvoteButtons.jsx
│   │   │
│   │   ├── profile/
│   │   │   ├── ProfileHeader.jsx
│   │   │   ├── BadgeList.jsx
│   │   │   ├── ReputationCard.jsx
│   │   │   └── ActivityTimeline.jsx
│   │   │
│   │   └── notifications/
│   │       ├── NotificationItem.jsx
│   │       └── NotificationDropdown.jsx
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx
│   │   │
│   │   ├── dashboard/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── posts/
│   │   │   ├── CreateProblem.jsx
│   │   │   ├── ProblemDetails.jsx
│   │   │   ├── ExploreProblems.jsx
│   │   │   └── EditProblem.jsx
│   │   │
│   │   ├── archive/
│   │   │   └── KnowledgeArchive.jsx
│   │   │
│   │   ├── leaderboard/
│   │   │   └── Leaderboard.jsx
│   │   │
│   │   ├── profile/
│   │   │   ├── UserProfile.jsx
│   │   │   └── EditProfile.jsx
│   │   │
│   │   ├── notifications/
│   │   │   └── Notifications.jsx
│   │   │
│   │   ├── settings/
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── LandingPage.jsx
│   │   ├── About.jsx
│   │   ├── NotFound.jsx
│   │   └── Unauthorized.jsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── PrivateRoute.jsx
│   │   └── AdminRoute.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── NotificationContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── postService.js
│   │   ├── userService.js
│   │   ├── notificationService.js
│   │   └── reputationService.js
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   ├── useNotifications.js
│   │   └── useDebounce.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   ├── formatDate.js
│   │   └── storage.js
│   │
│   ├── data/
│   │   ├── dummyUsers.js
│   │   ├── dummyPosts.js
│   │   └── badges.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── vite-env.d.ts
│
├── .env
├── .gitignore
├── eslint.config.js
├── package.json
├── README.md
└── vite.config.js