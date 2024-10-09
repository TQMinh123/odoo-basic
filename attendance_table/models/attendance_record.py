from odoo import models, fields

class AttendanceRecord(models.Model):
    _name = 'attendance.record'
    _description = 'Attendance Record'

    user_id = fields.Many2one('res.users', string='User', required=True)
    date = fields.Date(string='Date', required=True)
    present = fields.Boolean(string='Present', default=False)