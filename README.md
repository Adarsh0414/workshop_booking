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
> **Log In:**
> Before:
> ![Login Before]<img width="1796" height="902" alt="image" src="https://github.com/user-attachments/assets/f6cd2b47-5cde-492d-8342-963fcfdc5666" />
> After:
> ![Login After]<img width="1904" height="933" alt="image" src="https://github.com/user-attachments/assets/cbf42bfa-2759-4f6f-b850-6a4092aeb8d8" />
> **Register:**
> Before:
> ![Register Before]<img width="1783" height="902" alt="image" src="https://github.com/user-attachments/assets/dbbffff7-f84b-4180-a904-f325a1f57bf7" />
> After:
> ![Register After]<img width="1900" height="925" alt="image" src="https://github.com/user-attachments/assets/7c1ec490-e5b4-4d38-adf6-1408d4d4cab3" />
> **Home page:**
> <img width="1901" height="918" alt="image" src="https://github.com/user-attachments/assets/c88cb7ff-3e96-4234-bccf-982ddbcd09e3" />
> **Workshop Types Page:**
> <img width="1901" height="926" alt="image" src="https://github.com/user-attachments/assets/c72c0643-a118-4ac7-b6b4-42aa4db882d2" />
> **Workshop Detail Page:**
> <img width="1919" height="931" alt="image" src="https://github.com/user-attachments/assets/9b408692-8e6f-4191-80fc-65ba1432e969" />
> **Propose Workshop:**
> <img width="1895" height="928" alt="image" src="https://github.com/user-attachments/assets/81a39152-da3f-4a87-bd36-203cc758791a" />
> **Workshop Statistics:**
> <img width="1906" height="925" alt="image" src="https://github.com/user-attachments/assets/e55a6cd3-8a63-4076-8745-d63bd387eede" />
> **State Chart:**
> <img width="1902" height="928" alt="image" src="https://github.com/user-attachments/assets/58c7d2e6-d82b-48bf-80b1-7878890d5787" />
> **Workshop Chart:**
> <img width="1900" height="927" alt="image" src="https://github.com/user-attachments/assets/76dbbbfd-3a02-4c38-b62c-ebb51b18c136" />
> **Profile:**
> <img width="1901" height="928" alt="image" src="https://github.com/user-attachments/assets/e9ab1af9-0bd0-4019-b517-f9c33c1f74ea" />
> <img width="1900" height="933" alt="image" src="https://github.com/user-attachments/assets/e7fd3e83-0494-467d-9395-a5f64ceb6f68" />
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

Contributions are welcome! Fork the repository, work on a feature branch, and submit pull requests.

---

## Acknowledgments

- Original project by FOSSEE: [https://github.com/FOSSEE/workshop_booking](https://github.com/FOSSEE/workshop_booking)  
- UI enhancements inspired by modern mobile-first design principles  
- UI Framework: Bootstrap 5  
- IIT Bombay for academic guidelines and standards

### Reasoning

**What design principles guided your improvements?**<br>

Simplicity, clarity, and ease of use, coupled with a mobile-first approach, were the key design principles. Given that the users are students who mostly use the platform on their phones, the user interface was designed on the premise of smaller screens to maximize usability. The interface visually emphasizes certain aspects by providing a visual hierarchy that colors, size, and spacing. Standardized GUI elements lessen the mental effort needed, while the use of appropriate HTML tags and ARIA attributes help to provide access for users with disabilities.

**How did you ensure responsiveness across devices?**<br>

Meeting responsive design goals took several steps. Use CSS media queries to dynamically reflow content based on viewport size. Use Flexbox CSS and CSS Grid layout for added structural flexibility. Use Bootstrap 5 for responsive grids and utility classes to provide consistent behavior on the same devices. Apart from interactive elements that needed to meet prescribed reach standards of 44 x 44 pixels and above to accommodate easy touches, Images and media were responsive to preserve the integrity of aspect ratios to prevent layout breaks.

**What trade-offs did you make between the design and performance?**<br>

It was important for me to find equilibrium between an appealing UI with rich features and performant and accessible code. In this regard, large images and severe animations were avoided or optimized (e.g., replacing bitmaps with SVG icons), achieving lower load time for users with slow bandwidth or devices, and ensuring fast load times for everyone. Using some parts of Bootstrap through CDN and some custom builds helped to eliminate styling inconsistency without asset bloat. Therefore, restrained design moderation was embraced for speed, reliability, and accessibility, ensuring lower resource consumption and better scalability.

**What was the most challenging part of the task, and how did you approach it?**<br>

The issue I faced was that of greatly improving the user interface at the same time I am trying to preserve the present core workflow and user expectations. This was very important to us in terms of maintaining the trust and familiarity of our returning users, while at the same time, I introduced new visual and interactive elements. I addressed this by use of an iterative development and rigorous testing approach, which included continuous usability testing of our emulators and hardware, which I had access to. Also, I put forth an effort to preserve semantic structure for accessibility issues, to see to it that this site was keyboard-friendly, and to present changes in such a way as to increase user confidence in our platform.
