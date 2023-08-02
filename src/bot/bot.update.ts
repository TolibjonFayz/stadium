import { Update, Start, Ctx, On, Help, Settings } from 'nestjs-telegraf';
import { BotService } from './bot.service';
import { Context } from 'telegraf';

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    console.log(ctx);

    return 'Salom';
    // return this.botService.start(ctx);
  }

  @On('contact')
  async onContact(@Ctx() ctx: Context) {
    if ('contact' in ctx.message) {
      await ctx.reply(String(ctx.message.contact.phone_number));
      await ctx.reply(String(ctx.message.contact.first_name));
      await ctx.reply(String(ctx.message.contact.last_name));
      await ctx.reply(String(ctx.message.contact.user_id));
    }
  }

  @On('photo')
  async onPhoto(@Ctx() ctx: Context) {
    if ('photo' in ctx.message) {
      console.log(ctx.message.photo);
      await ctx.replyWithPhoto(
        String(ctx.message.photo[ctx.message.photo.length - 1].file_id),
      );
    }
  }

  @On('video')
  async onVideo(@Ctx() ctx: Context) {
    if ('video' in ctx.message) {
      await ctx.reply(String(ctx.message.video.file_name));
    }
  }

  @On('sticker')
  async onSticker(@Ctx() ctx: Context) {
    if ('sticker' in ctx.message) await ctx.reply('😀');
  }

  @On('animation')
  async onAnimation(@Ctx() ctx: Context) {
    await ctx.reply('Animate');
  }

  @On('location')
  async onLocation(@Ctx() ctx: Context) {
    if ('location' in ctx.message) {
      await ctx.reply(String(ctx.message.location.latitude));
      await ctx.reply(String(ctx.message.location.longitude));
    }
  }

  @On('channel_post')
  async onPost(@Ctx() ctx: Context) {
    await ctx.reply('post');
  }

  @Help()
  async onHelp(@Ctx() ctx: Context) {
    return 'Qoyday...';
  }
}
