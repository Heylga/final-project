"""empty message

Revision ID: 8b581c280ebc
Revises: 3ff59210e060
Create Date: 2022-06-20 20:16:34.372272

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8b581c280ebc'
down_revision = '3ff59210e060'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('book', 'book_picture')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('book', sa.Column('book_picture', sa.TEXT(), autoincrement=False, nullable=False))
    # ### end Alembic commands ###
