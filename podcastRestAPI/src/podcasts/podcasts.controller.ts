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
import { Episode } from './entities/episode.entity';

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

  @Get('/:id/episodes')
  getAllEpisodes(@Param('id') podcastId: string): Episode[] {
    return this.podcastsService.getAllEpisodes(podcastId);
  }

  @Post('/:id/episodes')
  addEpisode(@Param('id') podcastId: string, @Body() episodeData) {
    return this.podcastsService.addEpisode(podcastId, episodeData);
  }

  @Delete('/:id/episodes/:episodeId')
  removeEpisode(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
  ) {
    return this.podcastsService.removeEpisode(podcastId, episodeId);
  }

  @Patch('/:id/episodes/:episodeId')
  updateEpisode(
    @Param('id') podcastId: string,
    @Param('episodeId') episodeId: string,
    @Body() updateData,
  ) {
    return this.podcastsService.updateEpisode(podcastId, episodeId, updateData);
  }
}
