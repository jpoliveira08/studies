## Configuration

- All of the configuration files for the Laravel framework are stored in the <bold>config directory</bold>.

## Database and Migrations

- By default, your application's .env configuration file specifies that Laravel will be interacting with a SQLite database.

## Directory Configuration
- If the workdir of the server (ubuntu, debian, ...) is set in /var/www/html, the laravel application should be in the same path, not in a subfolder like /var/www/html/laravel.

## Laravel Sail

- A built-in solution for running your Laravel project using <bold>Docker</bold>.

## Models
- Provide a powerful and enjoyable interface for you to interact with the tables in your database.
- You can see all the available options by running the php artisan make:model --help

## Migrations
- Allow you to easily create and modify the tables in your database. They ensure that the same database structure exists everywhere that your application runs.

## Controllers
- Are responsible for processing requests made to your application and returning a response.

# Routing
- Routes are managed in the <bold>routes directory</bold> of your project.

## Comands
- php artisan make:model -mrc ModelName: creates a Model, Migration and Controller.

- php artisan route:list: View all of the routes for your application