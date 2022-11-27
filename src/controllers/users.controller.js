exports.readAllUsers = (req, res)=> {
  console.log(req.query)
  return res.status(200).json({
    success: true,
    message: 'List data of users'
  })
}

exports.readUser = (req, res)=> {
  console.log(req.params.id)
  return res.status(200).json({
    success: true,
    message: 'Detail users'
  })
}

exports.createUser = (req, res)=> {
  return res.status(200).json({
    success: true,
    message: 'User created succesfully'
  })
}


exports.updateUser = (req, res)=> {
  return res.status(200).json({
    success: true,
    message: 'User update successfully'
  })
}

exports.deleteUser = (req, res)=> {
  return res.status(200).json({
    success: true,
    message: 'Delete user successfully'
  })
}
