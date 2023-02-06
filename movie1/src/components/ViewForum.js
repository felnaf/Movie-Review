import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { viewForumData } from '../actions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ViewForum = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { viewForum } = useSelector((state) => state.postReducer);
  // console.log(viewForum);

  useEffect(() => {
    if (id) {
      dispatch(viewForumData(id));
    }
  }, []);
  return (
    <div className="container mt-5">
      <Button variant="primary" as={Link} to="/forum">
        Back
      </Button>
      <Card style={{ width: '18rem' }} className="mt-4">
        <Card.Img variant="top" src={viewForum.image} />
        <Card.Body>
          <Card.Title>Forum:{viewForum.title}</Card.Title>
          <Card.Text>Title:{viewForum.movie}</Card.Text>
          <Card.Text>Description:{viewForum.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewForum;
