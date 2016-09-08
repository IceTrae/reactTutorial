import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(event){
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }

  courseRow(course, index){
    return (<div key={index}>{course.title}</div>);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" onClick={this.onClickSave} value="Save"/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(courseActions, dispatch)
//   };
// }

export default connect(mapStateToProps)(CoursesPage);
// import React, {PropTypes} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as courseActions from '../../actions/courseActions';
// import CourseList from './CourseList';
// import {browserHistory} from 'react-router';
//
// class CoursesPage extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
//   }
//
//   courseRow(course, index) {
//     return <div key={index}>{course.title}</div>;
//   }
//
//   redirectToAddCoursePage() {
//     browserHistory.push('/course');
//   }
//
//   render() {
//     const {courses} = this.props;
//
//     return (
//       <div>
//         <h1>Courses</h1>
//         <input type="submit"
//                value="Add Course"
//                className="btn btn-primary"
//                onClick={this.redirectToAddCoursePage}/>
//         <CourseList courses={courses}/>
//       </div>
//     );
//   }
// }
//
// CoursesPage.propTypes = {
//   courses: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };
//

//
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
