import { Injectable, NotFoundException } from '@nestjs/common';
import { Podcast } from './entities/podcast.entity';

@Injectable()
export class PodcastsService {
  private podcasts: Podcast[] = [];

  getAll(): Podcast[] {
    return this.podcasts;
  }

  getOne(id: string): Podcast {
    // +id is same as parseInt(id)
    const podcast = this.podcasts.find((podcast) => podcast.id === +id);
    if (!podcast) {
      throw new NotFoundException(`Podcast with Id: ${id} not found`);
    }
    return podcast;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.podcasts = this.podcasts.filter((podcast) => podcast.id !== +id);
  }

  create(podcastData) {
    this.podcasts.push({
      id: this.podcasts.length + 1,
      ...podcastData,
    });
  }

  update(id: string, updateData) {
    const podcast = this.getOne(id);
    this.deleteOne(id);
    this.podcasts.push({ ...podcast, ...updateData });
  }
}
