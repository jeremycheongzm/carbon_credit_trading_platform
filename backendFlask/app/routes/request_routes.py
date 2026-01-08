from flask import Blueprint, request, jsonify
from app.models.request import Request
from app import db

request_bp = Blueprint('request', __name__)

@request_bp.route('/', methods=['GET'])
def get_requests():
    requests = Request.query.all()
    return jsonify([r.to_dict() for r in requests])

@request_bp.route('/', methods=['POST'])
def create_request():
    data = request.get_json()
    company_name = data['company_name']
    carbon_quantity = data['carbon_quantity']
    carbon_price = data['carbon_price']
    request_reason = data['request_reason']
    
    new_request = Request(company_name=company_name, carbon_quantity=carbon_quantity, carbon_price=carbon_price, request_reason=request_reason)
    db.session.add(new_request)
    db.session.commit()
    return jsonify(new_request.to_dict()), 201
