from app import db

class Request(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(100), nullable=False)
    carbon_quantity = db.Column(db.Integer, nullable=False)
    carbon_price = db.Column(db.Float, nullable=False)
    request_reason = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            'company_name': self.company_name,
            'carbon_quantity': self.carbon_quantity,
            'carbon_price': self.carbon_price,
            'request_reason': self.request_reason
        }
