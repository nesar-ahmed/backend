import { Query, Resolver } from '@nestjs/graphql';

import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsService } from './restaurants.service';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Query(() => [Restaurant])
  getAll(): Promise<Restaurant[]> {
    return this.restaurantsService.getAll();
  }
}
