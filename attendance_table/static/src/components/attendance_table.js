odoo.define('attendance_table.attendance_table', function (require) {
    "use strict";

    const AbstractField = require('web.AbstractField');
    const registry = require('web.field_registry');
    const FormView = require('web.FormView');

    const AttendanceTable = FormView.extend({
        // Thiết lập cho OWL
        start() {
            const self = this;
            this._super.apply(this, arguments);

            // Render table
            this.renderAttendanceTable();
        },

        renderAttendanceTable() {
            const self = this;
            // Lấy danh sách người dùng từ Odoo
            this._rpc({
                model: 'res.users',
                method: 'search_read',
                args: [[], ['id', 'name']],
            }).then(function (users) {
                const attendanceData = [];

                // Duyệt qua người dùng để tạo hàng cho bảng
                users.forEach(user => {
                    attendanceData.push({
                        user_id: user.id,
                        name: user.name,
                        present: false, // Mặc định là không có mặt
                    });
                });

                self.$el.append('<table id="attendance_table" class="table"><thead><tr><th>User</th><th>Date</th><th>Present</th></tr></thead><tbody></tbody></table>');
                const tbody = self.$('#attendance_table tbody');

                // Lặp qua dữ liệu để tạo các dòng trong bảng
                attendanceData.forEach(record => {
                    tbody.append(`
                        <tr>
                            <td>${record.name}</td>
                            <td><input type="date" class="form-control" /></td>
                            <td><input type="checkbox" class="attendance-checkbox" /></td>
                        </tr>
                    `);
                });
            });
        },
    });

    registry.add('attendance_table', AttendanceTable);
});
