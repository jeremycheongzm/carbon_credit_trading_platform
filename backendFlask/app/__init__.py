from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object("app.config.Config")

    CORS(app)
    db.init_app(app)
    JWTManager(app)

    from app.routes.auth_routes import auth_bp
    from app.routes.request_routes import request_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(request_bp, url_prefix="/api/requests")

    return app
