from flask import Flask
from flask_cors import CORS
from .config import Config
from .routes.auth_routes import auth_bp
from .routes.request_routes import request_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)  # Enable Cross-Origin Resource Sharing

    # Register blueprints (modularize routes)
    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(request_bp, url_prefix='/api/requests')

    return app
