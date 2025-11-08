# Team Portfolio Website

> A modern, interactive team portfolio showcasing CEG students' talents and achievements.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Overview
A dynamic and interactive portfolio website built with Angular, showcasing a team of Computer Science students from College of Engineering Guindy. The website features modern UI/UX design, responsive layouts, and advanced search functionality to highlight team members' skills, projects, and achievements.

## Final Walkthrough

### Key Features
1. **Interactive Member Cards**
   - Animated hover effects with 3D rotation
   - Profile image with overlay information
   - Quick view functionality
   - Dynamic role badges

2. **Advanced Search System**
   - Real-time filtering across multiple fields
   - Multi-parameter search (skills, roles, projects)
   - Debounced input for optimal performance
   - Intuitive visual feedback

3. **Responsive Design**
   - Mobile-first approach
   - Fluid animations and transitions
   - Adaptive layouts for all screen sizes
   - Cross-browser compatibility

## Modules Demonstrated

### 1. Core Modules
- **Routing Module**
  - Dynamic route configuration
  - Lazy loading for optimized performance
  - Protected routes implementation

- **Component Module**
  - Standalone components architecture
  - Efficient parent-child communication
  - Lifecycle hooks optimization

- **Service Module**
  - Dependency injection patterns
  - Observable data streams
  - Centralized state management

### 2. Feature Modules
- **Member Module**
  - Comprehensive profile management
  - Robust data modeling
  - Full CRUD operations support

- **Search Module**
  - Advanced filter implementation
  - Real-time updates
  - Optimized search algorithms

## System Architecture

### Frontend Architecture
```
Portfolio-site/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   └── member-detail/
│   │   ├── models/
│   │   ├── services/
│   │   └── shared/
│   ├── assets/
│   └── styles/
```

### Technical Stack
- **Framework**: Angular v20
- **Language**: TypeScript
- **Styling**: Modern CSS with animations
- **State Management**: RxJS
- **Build Tool**: Angular CLI
- **Deployment**: Vercel

## Implemented Highlights

### 1. Performance Optimizations
- Lazy loading of routes and components
- Optimized image loading strategy
- Debounced search implementation
- Efficient caching mechanisms

### 2. User Experience
- Smooth, hardware-accelerated animations
- Intuitive navigation system
- Fully responsive design
- Fast, real-time search results

### 3. Code Quality
- Strict TypeScript configuration
- Comprehensive ESLint rules
- Unit testing coverage
- Clean code architecture

## Testing/Validation

### Unit Tests
- Component functionality testing
- Service method validation
- Data model verification
- Route navigation testing

### Performance Testing
- Load time optimization
- Memory usage monitoring
- Animation performance metrics
- Search response timing

## Challenges/Solutions

### 1. Search Performance
**Challenge**: Initial search implementation was causing performance issues
**Solution**: 
- Implemented debouncing mechanism
- Optimized search algorithm
- Added client-side caching

### 2. Animation Performance
**Challenge**: Complex animations impacting mobile performance
**Solution**: 
- Implemented hardware acceleration
- Optimized animation triggers
- Added performance monitoring

### 3. Responsive Design
**Challenge**: Maintaining consistent layout across devices
**Solution**: 
- Implemented mobile-first approach
- Utilized modern CSS Grid/Flexbox
- Added strategic breakpoints

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Future Enhancements
1. Progressive Web App (PWA) implementation
2. Dark mode support with theme switching
3. Backend API integration
4. Additional interactive features
5. Role-based access control
6. Multi-language support

## Team Members

### Saravana Kumar B
- Role: Pre-Final Year CSE Undergraduate
- Key Skills: React, Node.js, DSA, Java
- Projects: Curated News Platform, Student Management System

### Sasi Kiruthik P
- Role: 3rd Year CSE Undergraduate
- Key Skills: Java, Python, Full Stack Development
- Projects: AskNFix, GetPaws, HackXplore

### Dilshan Chinnappan A
- Role: 3rd Year CSE Undergraduate
- Key Skills: Full Stack Development, Cloud Technologies
- Projects: EnrollEase, NewsNexus

### Nishal S
- Role: 3rd Year CSE Undergraduate
- Key Skills: Java, Full Stack Development, Problem Solving
- Projects: 2D Function Plotter, Wildlife Census Management System

### Gowtham Krishnan
- Role: 3rd Year CSE Undergraduate
- Key Skills: Cloud Computing, DevOps, Full Stack Development
- Projects: Cloud Task Manager, Smart Learning Platform

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [RxJS Documentation](https://rxjs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License
This project is licensed under the MIT License - see the LICENSE file for details.
