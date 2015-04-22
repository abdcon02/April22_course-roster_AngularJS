courseRoster.factory('CoursesFactory', function CoursesFactory() {
  var factory = {};
  factory.courses = [];

  factory.addCourse = function() {
    this.courses.push({ name: factory.courseName,
                        id: factory.course.length + 1,
                        students: [] });
    factory.courseName = null;
  };

  return factory;
});
