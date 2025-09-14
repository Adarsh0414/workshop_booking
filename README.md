# Workshop Booking

A Django-based web application for booking and managing workshops, enhanced with significant UI/UX improvements focusing on mobile usability and responsive design.

## Features

- User registration and authentication
- Workshop proposal and management
- Workshop statistics
- Content management system
- Enhanced mobile-first responsive UI/UX design
- Improved readability, navigation, and visual hierarchy

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/workshop-booking.git
    cd workshop-booking
    ```

2.  **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

3.  **Create a `local_settings.py` file:**

    Create a `local_settings.py` file in the `workshop_portal` directory and add the following content:

    ```python
    EMAIL_HOST = 'your_email_host'
    EMAIL_PORT = 587
    EMAIL_HOST_USER = 'your_email_username'
    EMAIL_HOST_PASSWORD = 'your_email_password'
    EMAIL_USE_TLS = True
    SENDER_EMAIL = 'your_sender_email'
    ```

4.  **Run database migrations:**

    ```bash
    python manage.py migrate
    ```

5.  **Run the development server:**

    ```bash
    python manage.py runserver
    ```

## Usage

1. Access the application at `http://localhost:8000`.
2. Register as a new user.
3. Propose and manage workshops.
4. Experience the enhanced UI/UX optimized for mobile and desktop.

## UI/UX Enhancement Overview

### Design Principles

The UI/UX enhancements emphasize a mobile-first design, simplicity, clarity, and accessibility, all of which are critical for student users who primarily access the platform via mobile devices. Visual hierarchy and consistent UI patterns enhance usability and reduce cognitive load.

### Key Enhancements

#### 1. Mobile-First Responsive Design

- Designed primarily for small screens, scaling up gracefully to tablets and desktops.
- Employed CSS media queries to adapt layouts, font sizes, and element visibility dynamically across screen widths.
- Prioritized vertical stacking of elements with clear margin/padding for touch-friendly spacing and ease of thumb reach.
- Ensured interactive elements (buttons, inputs) meet minimum touch target sizes (44x44px).
- Responsive images scale properly, preserving aspect ratios without overflow.

#### 2. Simplification and Visual Hierarchy

- Reduced clutter by removing unnecessary UI elements and logically grouping inputs.
- Used whitespace effectively to separate functional areas and enhance readability.
- Applied a clear typographic scale with larger, bold fonts for headings and readable body text (minimum 12pt).
- Adopted consistent color hierarchy with primary accent colors for calls-to-action and neutral backgrounds.
- Visual differentiation with subtle shadows or borders to separate clickable cards and form fields.

#### 3. Navigation and Flow Optimization

- Fixed navigation bars, optimized for thumb reach, and replaced complex menus.
- Clear, concise button labels reflecting primary user actions.
- Added progress indicators for multi-step booking, improving transparency.
- Provided immediate user feedback on interactions through animations and color changes.

#### 4. Accessibility Considerations

- Followed WCAG guidelines, ensuring a minimum 4.5:1 contrast ratio for text.
- Used semantic HTML and ARIA labels for screen reader compatibility.
- Enabled keyboard navigability and visible focus outlines.
- Included clear, field-associated form validation messages.

#### 5. Performance and Load Optimization

- Optimized assets; replaced heavy images with compressed/internet-sourced images and SVG icons.
- Minimized dependencies like Bootstrap via CDN and custom builds to reduce bundle size.
- Implemented lazy loading for non-critical assets.
- Used CSS animations sparingly to avoid impact on low-end devices.

### Visual Enhancements

- Replaced placeholders with meaningful images at key UI points (e.g., workshop details, user profile).
- Applied a subtle fixed abstract background image, enhancing visual appeal without distraction.

### Responsive Layout

- Utilized CSS Flexbox and Grid combined with media queries for adaptable, fluid layouts.
- Ensured touch targets and spacing are thumb-friendly.
- Typography consistently scales for readability across devices.

### Trade-offs

- Sacrificed some decorative animations and large images to maintain fast load times and accessibility.
- Focused on core workflow stability with aesthetic improvements.

### Challenges

- Balancing extensive visual redesign with minimal disruption to the existing workflow.
- Iterative testing across emulators and real devices prioritized user needs and feedback.

---

## Visual Showcase

> **Before and After Screenshots:**
> Log In :
Before: <img width="1796" height="902" alt="image" src="https://github.com/user-attachments/assets/f6cd2b47-5cde-492d-8342-963fcfdc5666" />
After:<img width="1904" height="933" alt="image" src="https://github.com/user-attachments/assets/cbf42bfa-2759-4f6f-b850-6a4092aeb8d8" />
---

## Code Structure & Documentation

- Django backend (`workshop_portal/`) with clear separation of concerns
- Frontend templates using HTML enhanced with Bootstrap 5 and custom CSS
- JavaScript for responsive interactions was kept minimal for performance
- Custom styles and media queries under `css/` directory
- Configuration in `local_settings.py` for environment-specific sensitive data

All code is modular, clean, well-documented, and follows best practices for maintainability and scalability.

---

## Contributing

Contributions are welcome! Fork the repository, work on a feature branch, and submit pull requests. Report issues or feature requests via GitHub issues.

---

## Acknowledgments

- Original project by FOSSEE: [https://github.com/FOSSEE/workshop_booking](https://github.com/FOSSEE/workshop_booking)  
- UI enhancements inspired by modern mobile-first design principles  
- UI Framework: Bootstrap 5  
- IIT Bombay for academic guidelines and standards
