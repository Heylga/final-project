"""empty message

Revision ID: 1358767c6b15
Revises: e187862267bf
Create Date: 2022-06-17 14:31:26.140354

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1358767c6b15'
down_revision = 'e187862267bf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('book', sa.Column('public_id', sa.String(length=50), nullable=True))
    op.create_unique_constraint(None, 'book', ['public_id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'book', type_='unique')
    op.drop_column('book', 'public_id')
    # ### end Alembic commands ###
