#Note "menu" = a menu-item and "menus" is the full menu (pluralized)
class MenusController < ApplicationController
  def index
    render json: {status: 200, menu: Menu.all}
  end

  def show
    @menu_item = Menu.find(params[:id])
    render json: {status: 200, menu_item: @menu_item}
  end

  def create
    @menu_item = Menu.new(menu_params)
    if @menu_item.save
      render json: {status: 201, created_item: @menu_item}  
    else
      render json: {status: 422}
    end
  end

  def update
    @menu_item = Menu.find(params[:id])
    @menu_item.update(menu_params)
    render json: {status: 200, updated_item: @menu_item}
  end

  def destroy
    @menu_item = Menu.destroy(params[:id])
    render json: { status: 204 }
  end

  private

  def menu_params
    # Returns a sanitized hash of the params with nothing extra
    params.required(:menu).permit(:course_type, :item_name, :price, :ingredients, :details, :style_type, :pieces)
  end
end

