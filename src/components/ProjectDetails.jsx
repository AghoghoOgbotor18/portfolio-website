import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const ProjectDetails = () => {
  const {id} = useParams();
  useEffect(() => {
    window.scrollTo({top: 0, behavior:"smooth"})
  }, []);
  
  return (
    <div>project details</div>
  )
}

export default ProjectDetails
