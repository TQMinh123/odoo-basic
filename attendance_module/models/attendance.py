from odoo import _, api, Command, fields, models

class Attendance(models.Model):
    _name = 'attendance.basic'
    _description = 'Attendance Record'

    user_id = fields.Many2one('res.users', string='User', required=True)
    date = fields.Date(string='Date', required=True)
    is_attended = fields.Boolean(string='Is Attended', default=False)