import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY')
    CORS = {
        'allow_origins': [
            'http://localhost:3000',
            'http://127.0.0.1:3000',
            'http://127.0.0.1:5000',
        ],
        'allow_methods': [
            'GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'
        ],
    }

    # ЕСЛИ PostgreSQL и psycopg2 DBAPI
    # SQLALCHEMY_DATABASE_URI= 'postgresql+psycopg2://root:pass@localhost/mydb'

    SQLALCHEMY_DATABASE_URI = (
        os.environ.get('DATABASE_URI')
        or 'sqlite:///' + os.path.join(basedir, 'resume.db')
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
