defmodule HyperPotion.PageController do
  use HyperPotion.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
