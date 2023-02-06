import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getForumData } from '../actions';

const Forum = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const { forumData, userLoggedIn } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getForumData());
  }, []);
  return (
    <div className="container">
      {userLoggedIn ? (
        <Button variant="success" as={Link} to="/add-forum" className="mt-5">
          Add Forum
        </Button>
      ) : null}
      <div className="d-flex justify-content-around flex-wrap m-3">
        {forumData.map((d, index) => (
          <Card style={{ width: '18rem' }} key={index} className="card-box">
            <Card.Img variant="top" src={d.image} style={{ height: '250px' }} />
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>{d.movie}</Card.Text>
              {userLoggedIn ? (
                <Button variant="warning" as={Link} to={`/view-forum/${d.id}`}>
                  View
                </Button>
              ) : null}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Forum;
