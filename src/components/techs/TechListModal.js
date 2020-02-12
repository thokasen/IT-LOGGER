import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTechs, addTech } from "../../actions/techActions";
import TechItem from "./TechItem";

const TechListModal = ({ tech: { techs, loading }, getTechs, addTech }) => {
  useEffect(() => {
    getTechs();

    //eslint-disable-next-line
  }, []);

  // if (loading || techs === null) {
  //   return <Preloader />;
  // }

  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/techs");
  //   const data = await res.json();

  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
        <a
          href='#add-tech-modal'
          className='btn-floating red modal-close modal-trigger'
        >
          <i className='material-icons'>person_add</i>
        </a>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech,
  getTechs: PropTypes.func.isRequired,
  addTech: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { getTechs, addTech })(TechListModal);
