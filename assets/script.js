var schoolName = '';
var teacherName = '';


var handlers = {
    // Get the school name from the button
    addSchoolTeacherName: function () {
        var getSchoolName = document.getElementById('addSchoolNametInput');
        schoolName = (getSchoolName.value);
        var getTeacherName = document.getElementById('addTeacherNameInput');
        teacherName = (getTeacherName.value);
        view.postSchoolName();
    }
}

var view = {
    postSchoolName: function () {
        for (var i = 0; i < document.getElementsByClassName('school_name').length; i++) {
            var docSchoolName = document.getElementsByClassName('school_name')[i];
            docSchoolName.innerHTML = schoolName;
        };
        for (var i = 0; i < document.getElementsByClassName('teacher_name').length; i++) {
            var docTeacherName = document.getElementsByClassName('teacher_name')[i];
            docTeacherName.innerHTML = teacherName;
        }
    },
}