from flask import Flask

from config import Config
from .main import bp as main_bp
from .admin import bp as admin_bp

# Flask will automatically detect the create_app() factory function
#  and use it to create an application instance
def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # Initialize Flask extensions here

    # Register blueprints here
    app.register_blueprint(main_bp, url_prefix='/')
    app.register_blueprint(admin_bp, url_prefix='/admin')

    return app
