class Api::FoodsController < ApplicationController
before_action :set_food, only: [ :show, :update, :destroy]

  def index
    render json: Food.all 
  end

  def show
    render json: @food 
  end

  def create
    product = Food.new(food_params)

    if food.save
      render json: food
    else
      render json: { errors: product.errors.full_messages.join(',') },
        status: :unprocessable_entity
    end
  end

  def update
    if @food.update(food_params) 
      render json: @food
      else
        render json: @food.errors, status: 422
      end
  end

  def destroy
    @food.destroy 
  end

  private

    def set_food
      @food = Food.find(params[:id])
    end

    def product_params
      params.require(product).permit(:name, :description, :price)
    end
end
