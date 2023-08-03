import {
  Update,
  Start,
  Ctx,
  On,
  Help,
  Hears,
  Command,
  Action,
} from 'nestjs-telegraf';
import { BotService } from './bot.service';
import { Context, Markup } from 'telegraf';

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}

  @Start()
  async onStart(@Ctx() ctx: Context) {
    return this.botService.start(ctx);
  }

  @On('contact')
  async onContact(@Ctx() ctx: Context) {
    return this.botService.onContact(ctx);
  }

  @Command('stop')
  async onStop(@Ctx() ctx: Context) {
    return this.botService.onStop(ctx);
  }
  // @On('contact')
  // async onContact(@Ctx() ctx: Context) {
  //   if ('contact' in ctx.message) {
  //     await ctx.reply(String(ctx.message.contact.phone_number));
  //     await ctx.reply(String(ctx.message.contact.first_name));
  //     await ctx.reply(String(ctx.message.contact.last_name));
  //     await ctx.reply(String(ctx.message.contact.user_id));
  //   }
  // }

  // @On('photo')
  // async onPhoto(@Ctx() ctx: Context) {
  //   if ('photo' in ctx.message) {
  //     // console.log(ctx.message.photo);
  //     await ctx.replyWithPhoto(
  //       String(ctx.message.photo[ctx.message.photo.length - 1].file_id),
  //     );
  //   }
  // }

  // @On('video')
  // async onVideo(@Ctx() ctx: Context) {
  //   if ('video' in ctx.message) {
  //     await ctx.reply(String(ctx.message.video.file_name));
  //   }
  // }

  // @On('sticker')
  // async onSticker(@Ctx() ctx: Context) {
  //   if ('sticker' in ctx.message) await ctx.reply('😀');
  // }

  // @On('animation')
  // async onAnimation(@Ctx() ctx: Context) {
  //   await ctx.reply('Animate');
  // }

  // @On('location')
  // async onLocation(@Ctx() ctx: Context) {
  //   if ('location' in ctx.message) {
  //     await ctx.reply(String(ctx.message.location.latitude));
  //     await ctx.reply(String(ctx.message.location.longitude));
  //   }
  // }

  // @On('channel_post')
  // async onPost(@Ctx() ctx: Context) {
  //   await ctx.reply('post');
  // }

  // @Help()
  // async onHelp(@Ctx() ctx: Context) {
  //   return 'Qoyday...';
  // }

  // @On('invoice')
  // async onInvoice(@Ctx() ctx: Context) {
  //   if ('invoice' in ctx.message) {
  //     await ctx.reply(String(ctx.message.invoice.title));
  //   }
  // }

  // @On('voice')
  // async onvoice(@Ctx() ctx: Context) {
  //   if ('voice' in ctx.message) {
  //     await ctx.reply(String(ctx.message.voice.duration));
  //   }
  // }

  // @On('document')
  // async onDocument(@Ctx() ctx: Context) {
  //   if ('document' in ctx.message) {
  //     await ctx.reply(String(ctx.message.document.file_name));
  //   }
  // }

  // @On('venue')
  // async onVenue(@Ctx() ctx: Context) {
  //   if ('venue' in ctx.message) {
  //     await ctx.reply(String(ctx.message.venue.address));
  //   }
  // }

  // @Hears('hi')
  // async onHears(@Ctx() ctx: Context) {
  //   await ctx.reply('Hey what is up');
  // }

  // @Command('info')
  // async inlineButton(@Ctx() ctx: Context) {
  //   await ctx.reply('Information');
  // }

  // @Command('inline_keyboard')
  // async inlineButton2(@Ctx() ctx: Context) {
  //   const inlinekeyotboard = [
  //     [
  //       { text: 'Button 1', callback_data: 'button 1' },
  //       { text: 'Button 2', callback_data: 'button 2' },
  //       { text: 'Button 3', callback_data: 'button 3' },
  //     ],
  //     [{ text: 'Button 4', callback_data: 'button 4' }],
  //     [{ text: 'Button 5', callback_data: 'button 5' }],
  //   ];
  //   ctx.reply('Choose a inine button', {
  //     reply_markup: {
  //       inline_keyboard: inlinekeyotboard,
  //     },
  //   });
  // }

  // @Action('button 1')
  // async onActionButton1(@Ctx() ctx: Context) {
  //   ctx.reply('You pressed Button 1');
  // }

  // @Action('button 2')
  // async onActionButton2(@Ctx() ctx: Context) {
  //   ctx.reply('You pressed Button 2');
  // }

  // @Action('button 3')
  // async onActionButton3(@Ctx() ctx: Context) {
  //   ctx.reply('You pressed Button 3');
  // }

  // @Action('button 4')
  // async onActionButton4(@Ctx() ctx: Context) {
  //   ctx.reply('You pressed Button 4');
  // }

  // @Action('button 5')
  // async onActionButton5(@Ctx() ctx: Context) {
  //   ctx.reply('You pressed Button 5');
  // }

  // @Command('main_keyboard')
  // async mainButton(@Ctx() ctx: Context) {
  //   ctx.reply(`Choose a main button`, {
  //     parse_mode: 'HTML',
  //     ...Markup.keyboard([
  //       ['bir', 'ikki', 'uch'],
  //       ['to`rt'],
  //       [Markup.button.contactRequest('Telefon raqamni yuborish')],
  //       [Markup.button.locationRequest('Location yuborish')],
  //     ])
  //       .oneTime()
  //       .resize(),
  //   });
  // }

  // @Hears('bir')
  // async onBirButton(@Ctx() ctx: Context) {
  //   ctx.reply('bir bosildi!');
  // }

  // @Hears('ikki')
  // async onIkkiButton(@Ctx() ctx: Context) {
  //   ctx.reply('ikki bosildi!');
  // }

  // @Hears('uch')
  // async onUchButton(@Ctx() ctx: Context) {
  //   ctx.reply('uch bosildi!');
  // }

  // @Hears('to`rt')
  // async onTortButton(@Ctx() ctx: Context) {
  //   ctx.reply('to`rt bosildi!');
  // }
}
