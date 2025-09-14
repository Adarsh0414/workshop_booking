# Workshop Booking

A Django-based web application for booking and managing workshops.

## Features

*   User registration and authentication
*   Workshop proposal and management
*   Workshop statistics
*   Content management system

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

1.  Access the application at `http://localhost:8000`.
2.  Register as a new user.
3.  Propose and manage workshops.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.