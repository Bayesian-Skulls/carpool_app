"""empty message

Revision ID: 34c8446477
Revises: None
Create Date: 2015-03-23 16:46:56.619204

"""

# revision identifiers, used by Alembic.
revision = '34c8446477'
down_revision = None

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('carpool', sa.Column('driver_accepted', sa.Boolean(), nullable=True))
    op.add_column('carpool', sa.Column('passenger_accepted', sa.Boolean(), nullable=True))
    op.drop_column('carpool', 'accepted')
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('carpool', sa.Column('accepted', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.drop_column('carpool', 'passenger_accepted')
    op.drop_column('carpool', 'driver_accepted')
    ### end Alembic commands ###
