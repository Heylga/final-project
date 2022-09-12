"""empty message

Revision ID: f8833062c1b6
Revises: 81b249c235d0
Create Date: 2022-09-12 16:41:22.341452

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f8833062c1b6'
down_revision = '81b249c235d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('book', sa.Column('book_picture', sa.LargeBinary(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('book', 'book_picture')
    # ### end Alembic commands ###
