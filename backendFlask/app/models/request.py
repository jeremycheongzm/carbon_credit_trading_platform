from app import db
from datetime import datetime

class Request(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(100))
    carbon_quantity = db.Column(db.Integer)
    carbon_price = db.Column(db.Float)
    request_type = db.Column(db.String(10))
    status = db.Column(db.String(20), default="PENDING")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
