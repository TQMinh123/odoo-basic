{
    'name': 'Attendance Table',
    'version': '1.0',
    'category': 'Human Resources',
    'summary': 'Simple Attendance Table',
    'description': 'A simple attendance management system',
    'depends': ['base', 'web'],
    'data': [
        'views/attendance_views.xml',
        'views/attendance_menu.xml'
    ],
    'assets': {
        'web.assets_backend': [
            'attendance_table/static/src/components/attendance_table.js',
            'attendance_table/static/src/components/attendance_table.css',
        ],
    },
    'installable': True,
    'application': True,'auto_install': False,
    'license': 'LGPL-3',
}
