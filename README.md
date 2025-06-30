# Excellence Academy - School Website

A full-stack web application built with Next.js and Tailwind CSS for a comprehensive school management system.

## 🚀 Features

### Public-Facing Pages

- **Home Page** - Welcome section with school highlights and call-to-action
- **About Page** - School history, mission, vision, and core values
- **Testimonials Page** - Student, parent, and alumni testimonials
- **News & Events Page** - Latest news, blog posts, and upcoming events
- **Admissions Page** - Application process, requirements, and forms
- **Academics Page** - Curriculum information, programs, and departments

### Authentication System

- Role-based login system (Student/Teacher)
- Secure authentication with mock user data
- Automatic redirection based on user role

### Student Dashboard

- View personal information and academic records
- Access to termly reports with detailed subject grades
- Attendance tracking and overall performance metrics

### Teacher Dashboard

- Select and view student profiles
- Update student grades and comments for their subject
- Real-time report management with success notifications

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Custom role-based system with localStorage
- **API**: Next.js API Routes
- **Data**: Mock JSON data (easily replaceable with database)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd schoolWebApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Demo Credentials

### Student Login

- **Email**: student@school.com
- **Password**: password123
- **Role**: Student

### Teacher Login

- **Email**: teacher@school.com
- **Password**: password123
- **Role**: Teacher

## 📁 Project Structure

```
schoolWebApp/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── login/
│   │   │       └── route.ts
│   │   ├── reports/
│   │   │   ├── student/
│   │   │   │   └── route.ts
│   │   │   ├── student/[id]/
│   │   │   │   └── route.ts
│   │   │   └── update/
│   │   │       └── route.ts
│   │   └── students/
│   │       └── route.ts
│   ├── dashboard/
│   │   ├── student/
│   │   │   └── page.tsx
│   │   └── teacher/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── testimonials/
│   │   └── page.tsx
│   ├── news/
│   │   └── page.tsx
│   ├── admissions/
│   │   └── page.tsx
│   ├── academics/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navbar.tsx
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎯 Key Features Explained

### Authentication Flow

1. Users select their role (Student/Teacher) on the login page
2. Credentials are validated against mock user data
3. Successful login stores user data in localStorage
4. Users are redirected to their respective dashboards

### Student Dashboard Features

- **Personal Information Display**: Shows student details and ID
- **Academic Reports**: Displays termly reports with subject grades
- **Performance Metrics**: Overall grades and attendance tracking
- **Responsive Design**: Works seamlessly on all devices

### Teacher Dashboard Features

- **Student Selection**: Choose from a list of enrolled students
- **Report Management**: View and update student reports
- **Grade Updates**: Modify grades and comments for their subject
- **Success Notifications**: Modal confirmations for successful updates

### API Endpoints

#### Authentication

- `POST /api/auth/login` - User authentication

#### Students

- `GET /api/students` - Fetch all students (for teachers)

#### Reports

- `GET /api/reports/student` - Fetch current student's reports
- `GET /api/reports/student/[id]` - Fetch specific student's reports
- `POST /api/reports/update` - Update student report grades/comments

## 🎨 Design System

The application uses a consistent design system with:

- **Primary Colors**: Blue shades (#3b82f6, #2563eb, #1d4ed8)
- **Secondary Colors**: Gray shades for text and backgrounds
- **Components**: Reusable card, button, and form components
- **Typography**: Inter font family for clean, modern appearance
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🔧 Customization

### Adding New Users

Edit the mock user data in `/app/api/auth/login/route.ts`:

```typescript
const mockUsers = [
  {
    id: 3,
    email: "newstudent@school.com",
    password: "password123",
    role: "student",
    name: "New Student",
    grade: "Grade 11",
    studentId: "STU003",
  },
];
```

### Adding New Students

Edit the students list in `/app/api/students/route.ts`:

```typescript
const mockStudents = [
  // Add new student objects here
];
```

### Modifying Reports

Update the mock reports data in the respective API routes to add or modify student reports.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔮 Future Enhancements

- **Database Integration**: Replace mock data with PostgreSQL/MongoDB
- **Real Authentication**: Implement JWT tokens and secure sessions
- **File Upload**: Add support for document uploads
- **Email Notifications**: Send report updates to parents
- **Mobile App**: React Native companion app
- **Advanced Analytics**: Student performance analytics and insights
- **Parent Portal**: Separate dashboard for parents to view their children's progress

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation for common issues

---

**Built with ❤️ using Next.js and Tailwind CSS**
# This is a school website template initially generated using AI (Claude) but with revisions done to it
