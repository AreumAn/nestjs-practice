import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PodcastsService } from './podcasts.service';
import { Podcast } from './entities/podcast.entity';

@Controller('podcasts')
export class PodcastsController {
  constructor(private readonly podcastsService: PodcastsService) {}

  @Get()
  getAll(): Podcast[] {
    return this.podcastsService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') podcastId: string): Podcast {
    return this.podcastsService.getOne(podcastId);
  }

  @Post()
  create(@Body() podcastData) {
    return this.podcastsService.create(podcastData);
  }

  @Delete('/:id')
  remove(@Param('id') podcastId: string) {
    return this.podcastsService.deleteOne(podcastId);
  }

  @Patch('/:id')
  patch(@Param('id') podcastId: string, @Body() updateData) {
    return this.podcastsService.update(podcastId, updateData);
  }
}
