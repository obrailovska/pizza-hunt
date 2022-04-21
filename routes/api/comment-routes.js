const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");
// /api/comments/<pizzaId>
router.route("/:pizzaId").post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);
// This is a PUT route, instead of a POST, because technically we're not creating a new reply resource. Instead, we're just updating the existing comment resource. This is also reflected in the endpoint, because we make no reference to a reply resource.

// You'll need to create a new route for this one, because you'll need the id of the individual reply, not just its parent.
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
